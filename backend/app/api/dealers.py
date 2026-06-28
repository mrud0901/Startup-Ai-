from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session, joinedload
from typing import List, Optional
from app.database.database import get_db
from app.models.models import Dealer, DealerMetrics, Region, SalesHistory, Prediction, Recommendation
from app.schemas.schemas import Dealer as DealerSchema, DealerProfile

router = APIRouter()

@router.get("/dealers", response_model=List[DealerSchema])
def get_dealers(
    skip: int = 0,
    limit: int = 50,
    region_id: Optional[int] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Dealer).options(joinedload(Dealer.region), joinedload(Dealer.metrics))
    
    if region_id:
        query = query.filter(Dealer.region_id == region_id)
    if status:
        query = query.filter(Dealer.status == status)
    if search:
        query = query.filter(Dealer.name.ilike(f"%{search}%"))
        
    dealers = query.offset(skip).limit(limit).all()
    return dealers

@router.get("/dealers/{dealer_id}", response_model=DealerProfile)
def get_dealer(dealer_id: int, db: Session = Depends(get_db)):
    dealer = db.query(Dealer).options(
        joinedload(Dealer.region),
        joinedload(Dealer.metrics),
        joinedload(Dealer.sales_history),
        joinedload(Dealer.predictions),
        joinedload(Dealer.recommendations)
    ).filter(Dealer.id == dealer_id).first()
    if not dealer:
        raise HTTPException(status_code=404, detail="Dealer not found")
        
    return dealer
