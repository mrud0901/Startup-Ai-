# Sundaram Finance AI Dealer Growth Copilot

A production-quality enterprise web application transforming dealer network data into actionable growth strategies using AI precision. 

## Project Overview

This AI Dealer Growth Copilot allows Regional Managers at Sundaram Finance to:
- Monitor **Dealer Health Scores** based on multi-dimensional performance metrics.
- Leverage **Machine Learning (Mock Services)** to predict churn risk and dealer inactivity.
- Generate **AI-Driven Growth Recommendations** for specific at-risk or high-performing dealers.
- Explore the **Dealer Directory** and view deep-dive analytics into dealer performance trends.

This project was built by extracting the high-fidelity UI of Stitch AI and converting it into a full-stack, dynamic web application.

---

## Architecture & Technology Stack

The application follows a clean, modular architecture:

- **Frontend:** React, Vite, TypeScript, Tailwind CSS v4, React Router, Axios.
- **Backend:** FastAPI (Python), SQLAlchemy ORM.
- **Database:** PostgreSQL / SQLite (via SQLAlchemy).
- **Machine Learning Services:** Mocked AI logic integrated into the backend architecture.

### Folder Structure

```
.
├── backend/
│   ├── app/
│   │   ├── api/          # FastAPI Routers (Endpoints)
│   │   ├── database/     # SQLAlchemy connection & DB Seeder
│   │   ├── ml/           # Machine Learning mock logic
│   │   ├── models/       # Database ORM models
│   │   ├── schemas/      # Pydantic validation schemas
│   │   ├── main.py       # FastAPI application entry point
│   └── requirements.txt  # Python dependencies
└── frontend/
    ├── src/
    │   ├── components/   # Reusable UI components (Sidebar, TopNav)
    │   ├── pages/        # Main views (Dashboard, Dealer Directory, Profile)
    │   ├── index.css     # Global Tailwind styling & theme variables
    │   └── App.tsx       # React Router entry point
    ├── package.json      # Node dependencies
    └── vite.config.ts    # Vite bundler configuration
```

---

## Installation & Setup

### 1. Backend Setup

Ensure you have Python 3.10+ installed.

```bash
cd backend
python -m venv venv

# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

**Seed the Database:**
Populate the database with 500+ mock dealers and their historical metrics.
```bash
set PYTHONPATH=.
python -m app.database.seed
```

**Start the API Server:**
```bash
uvicorn app.main:app --reload
```
The FastAPI backend will be running at `http://localhost:8000`. You can view the API documentation at `http://localhost:8000/docs`.

### 2. Frontend Setup

Ensure you have Node.js 18+ installed.

```bash
cd frontend
npm install
```

**Start the Development Server:**
```bash
npm run dev
```
The React frontend will be running at `http://localhost:5173`.

---

## Future Enhancements

- Integrate real Machine Learning endpoints using Scikit-Learn or PyTorch models for churn prediction.
- Replace SQLite with a managed PostgreSQL instance for production deployment.
- Integrate authentication (JWT/OAuth) for role-based access control.
- Implement the "Market Insights" map visualization page.
