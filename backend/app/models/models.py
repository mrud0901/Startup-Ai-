from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    role = Column(String, default="executive")
    created_at = Column(DateTime, default=datetime.utcnow)

class Region(Base):
    __tablename__ = "regions"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    manager_name = Column(String)
    
    dealers = relationship("Dealer", back_populates="region")

class Dealer(Base):
    __tablename__ = "dealers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    status = Column(String, default="Active") # Active, Inactive, At Risk
    region_id = Column(Integer, ForeignKey("regions.id"))
    joined_date = Column(DateTime, default=datetime.utcnow)
    
    region = relationship("Region", back_populates="dealers")
    metrics = relationship("DealerMetrics", back_populates="dealer", uselist=False)
    sales_history = relationship("SalesHistory", back_populates="dealer")
    predictions = relationship("Prediction", back_populates="dealer")
    recommendations = relationship("Recommendation", back_populates="dealer")

class DealerMetrics(Base):
    __tablename__ = "dealer_metrics"
    id = Column(Integer, primary_key=True, index=True)
    dealer_id = Column(Integer, ForeignKey("dealers.id"))
    health_score = Column(Float, default=0.0)
    lead_generation = Column(Integer, default=0)
    conversion_rate = Column(Float, default=0.0)
    customer_rating = Column(Float, default=0.0)
    activity_frequency = Column(String, default="Medium")
    loan_disbursement = Column(Float, default=0.0)
    
    dealer = relationship("Dealer", back_populates="metrics")

class SalesHistory(Base):
    __tablename__ = "sales_history"
    id = Column(Integer, primary_key=True, index=True)
    dealer_id = Column(Integer, ForeignKey("dealers.id"))
    month = Column(String)
    year = Column(Integer)
    sales_volume = Column(Float, default=0.0)
    
    dealer = relationship("Dealer", back_populates="sales_history")

class Prediction(Base):
    __tablename__ = "predictions"
    id = Column(Integer, primary_key=True, index=True)
    dealer_id = Column(Integer, ForeignKey("dealers.id"))
    churn_probability = Column(Float, default=0.0)
    risk_category = Column(String, default="Low") # Low, Medium, High
    confidence_score = Column(Float, default=0.0)
    reason = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    dealer = relationship("Dealer", back_populates="predictions")

class Recommendation(Base):
    __tablename__ = "recommendations"
    id = Column(Integer, primary_key=True, index=True)
    dealer_id = Column(Integer, ForeignKey("dealers.id"))
    suggested_action = Column(String)
    reason = Column(String)
    status = Column(String, default="Pending") # Pending, Implemented, Dismissed
    created_at = Column(DateTime, default=datetime.utcnow)
    
    dealer = relationship("Dealer", back_populates="recommendations")
