from app.database.database import engine, Base, SessionLocal
from app.models.models import Dealer, Region, DealerMetrics, SalesHistory
import random
from datetime import datetime, timedelta

def seed_db():
    print("Starting database seed...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    # Create Regions
    regions = ["North India", "South India", "East India", "West India", "Central India"]
    region_objs = []
    for r in regions:
        region = Region(name=r, manager_name=f"{r} Regional Head")
        db.add(region)
        region_objs.append(region)
    db.commit()
    
    # Realistic Indian Dealer Names
    prefixes = ["Sri", "Balaji", "Sai", "Lakshmi", "Tirupati", "Krishna", "Om", "Ganesh", "Royal", "Apex"]
    names = ["Motors", "Auto Finance", "Tractors", "Automobiles", "Wheels", "Vehicles", "Auto Hub"]
    cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi", "Pune", "Kolkata", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Coimbatore"]
    
    print("Creating 500 dealers...")
    status_choices = ["Active"] * 85 + ["Inactive"] * 10 + ["At Risk"] * 5
    for i in range(1, 501):
        region = random.choice(region_objs)
        status = random.choice(status_choices)
        
        # Construct realistic name
        dealer_name = f"{random.choice(prefixes)} {random.choice(cities)} {random.choice(names)}"
        
        dealer = Dealer(
            name=dealer_name,
            status=status,
            region_id=region.id,
            joined_date=datetime.utcnow() - timedelta(days=random.randint(100, 1000))
        )
        db.add(dealer)
        db.commit()
        db.refresh(dealer)
        
        # Add Metrics (in Crores/Lakhs)
        # Loan disbursement 0.5 crores to 25 crores
        metrics = DealerMetrics(
            dealer_id=dealer.id,
            health_score=random.uniform(70.0, 99.0) if status == "Active" else random.uniform(20.0, 60.0),
            lead_generation=random.randint(100, 1000),
            conversion_rate=random.uniform(8.0, 35.0),
            customer_rating=random.uniform(3.5, 4.9),
            activity_frequency=random.choice(["Low", "Medium", "High", "Very High"]),
            loan_disbursement=random.uniform(0.5, 25.0) # In Crores
        )
        db.add(metrics)
        
        # Add Sales History (in Crores)
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        for month in months:
            sales = SalesHistory(
                dealer_id=dealer.id,
                month=month,
                year=2025,
                sales_volume=random.uniform(0.1, 5.0) # 10 lakhs to 5 crores per month
            )
            db.add(sales)
            
    db.commit()
    db.close()
    print("Seed complete!")

if __name__ == "__main__":
    seed_db()
