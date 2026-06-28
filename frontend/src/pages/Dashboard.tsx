
import { useAuth } from '../context/AuthContext';
import RegionalManagerDashboard from './dashboards/RegionalManagerDashboard';
import BusinessHeadDashboard from './dashboards/BusinessHeadDashboard';
import SalesExecutiveDashboard from './dashboards/SalesExecutiveDashboard';

const Dashboard = () => {
  const { user } = useAuth();
  const role = user?.role || 'Regional Manager';

  if (role === 'Business Head') {
    return <BusinessHeadDashboard />;
  }

  if (role === 'Sales Executive') {
    return <SalesExecutiveDashboard />;
  }

  // Default to Regional Manager
  return <RegionalManagerDashboard />;
};

export default Dashboard;
