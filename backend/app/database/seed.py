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
    regions = ["Northwest", "Southwest", "Northeast", "Southeast", "Midwest"]
    region_objs = []
    for r in regions:
        region = Region(name=r, manager_name=f"{r} Manager")
        db.add(region)
        region_objs.append(region)
    db.commit()
    
    # Create Dealers
    print("Creating 500 dealers...")
    status_choices = ["Active"] * 85 + ["Inactive"] * 10 + ["At Risk"] * 5
    for i in range(1, 501):
        region = random.choice(region_objs)
        status = random.choice(status_choices)
        dealer = Dealer(
            name=f"Automotive Dealership {i}",
            status=status,
            region_id=region.id,
            joined_date=datetime.utcnow() - timedelta(days=random.randint(100, 1000))
        )
        db.add(dealer)
        db.commit()
        db.refresh(dealer)
        
        # Add Metrics
        metrics = DealerMetrics(
            dealer_id=dealer.id,
            health_score=random.uniform(50.0, 99.0) if status == "Active" else random.uniform(20.0, 50.0),
            lead_generation=random.randint(50, 500),
            conversion_rate=random.uniform(5.0, 25.0),
            customer_rating=random.uniform(3.0, 5.0),
            activity_frequency=random.choice(["Low", "Medium", "High"]),
            loan_disbursement=random.uniform(100000, 5000000)
        )
        db.add(metrics)
        
        # Add Sales History
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        for month in months:
            sales = SalesHistory(
                dealer_id=dealer.id,
                month=month,
                year=2025,
                sales_volume=random.uniform(10000, 150000)
            )
            db.add(sales)
            
    db.commit()
    db.close()
    print("Seed complete!")

if __name__ == "__main__":
    seed_db()
