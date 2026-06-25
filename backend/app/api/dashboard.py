from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.database.database import get_db
from app.models.models import Dealer, DealerMetrics

router = APIRouter()

@router.get("/dashboard")
def get_dashboard_metrics(db: Session = Depends(get_db)):
    total_dealers = db.query(Dealer).count()
    active_dealers = db.query(Dealer).filter(Dealer.status == "Active").count()
    inactive_dealers = db.query(Dealer).filter(Dealer.status == "Inactive").count()
    
    activation_percentage = (active_dealers / total_dealers * 100) if total_dealers > 0 else 0.0
    
    avg_health_score = db.query(func.avg(DealerMetrics.health_score)).scalar() or 0.0
    
    # Mocking monthly growth for now
    monthly_growth = 4.2
    
    return {
        "total_dealers": total_dealers,
        "active_dealers": active_dealers,
        "inactive_dealers": inactive_dealers,
        "dealer_activation_percentage": round(activation_percentage, 1),
        "average_health_score": round(avg_health_score, 1),
        "monthly_growth": monthly_growth
    }
