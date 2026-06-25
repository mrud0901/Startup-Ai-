from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import engine, Base
import app.models.models as models
from app.api import dashboard, dealers

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Sundaram Finance AI Dealer Growth Copilot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard.router, prefix="/api", tags=["dashboard"])
app.include_router(dealers.router, prefix="/api", tags=["dealers"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Sundaram Finance AI Dealer Growth Copilot API"}
