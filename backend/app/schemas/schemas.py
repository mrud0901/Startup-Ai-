from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# --- Region ---
class RegionBase(BaseModel):
    name: str
    manager_name: Optional[str] = None

class Region(RegionBase):
    id: int
    class Config:
        from_attributes = True

# --- Metrics ---
class DealerMetricsBase(BaseModel):
    health_score: float
    lead_generation: int
    conversion_rate: float
    customer_rating: float
    activity_frequency: str
    loan_disbursement: float

class DealerMetrics(DealerMetricsBase):
    id: int
    dealer_id: int
    class Config:
        from_attributes = True

# --- Sales History ---
class SalesHistoryBase(BaseModel):
    month: str
    year: int
    sales_volume: float

class SalesHistory(SalesHistoryBase):
    id: int
    dealer_id: int
    class Config:
        from_attributes = True

# --- Prediction ---
class PredictionBase(BaseModel):
    churn_probability: float
    risk_category: str
    confidence_score: float
    reason: Optional[str] = None

class Prediction(PredictionBase):
    id: int
    dealer_id: int
    created_at: datetime
    class Config:
        from_attributes = True

# --- Recommendation ---
class RecommendationBase(BaseModel):
    suggested_action: str
    reason: str
    status: str

class Recommendation(RecommendationBase):
    id: int
    dealer_id: int
    created_at: datetime
    class Config:
        from_attributes = True

# --- Dealer ---
class DealerBase(BaseModel):
    name: str
    status: str
    region_id: int

class Dealer(DealerBase):
    id: int
    joined_date: datetime
    region: Region
    metrics: Optional[DealerMetrics] = None
    
    class Config:
        from_attributes = True

# --- Dealer Deep Dive ---
class DealerProfile(Dealer):
    sales_history: List[SalesHistory] = []
    predictions: List[Prediction] = []
    recommendations: List[Recommendation] = []
    
    class Config:
        from_attributes = True

# --- Dashboard Metrics ---
class DashboardKPIs(BaseModel):
    total_dealers: int
    active_dealers: int
    inactive_dealers: int
    dealer_activation_percentage: float
    average_health_score: float
    monthly_growth: float
