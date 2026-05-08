import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import MyOrders from './pages/MyOrders'
import BookTestDrive from './pages/BookTestDrive'
import ServiceBooking from './pages/ServiceBooking'
import Wishlist from './pages/Wishlist'
import AdminDashboard from './pages/AdminDashboard'
import MyProfile from './pages/MyProfile'
import ChangePassword from './pages/ChangePassword'
import MyTestDrives from './pages/MyTestDrives'
import MyServiceHistory from './pages/MyServiceHistory'
import OrderTracking from './pages/OrderTracking'
import SearchResults from './pages/SearchResults'
import CategoryPage from './pages/CategoryPage'
import NewArrivals from './pages/NewArrivals'
import AllDealerships from './pages/AllDealerships'
import DealershipDetail from './pages/DealershipDetail'
import ManageCars from './pages/ManageCars'
import ManageOrders from './pages/ManageOrders'
import ManageCustomers from './pages/ManageCustomers'
import CustomerChat from './pages/CustomerChat'
import AdminChat from './pages/AdminChat'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/book-test-drive" element={<BookTestDrive />} />
        <Route path="/service-booking" element={<ServiceBooking />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/my-test-drives" element={<MyTestDrives />} />
        <Route path="/my-service-history" element={<MyServiceHistory />} />
        <Route path="/order-tracking/:id" element={<OrderTracking />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/dealerships" element={<AllDealerships />} />
        <Route path="/dealership/:id" element={<DealershipDetail />} />
        <Route path="/admin/cars" element={<ManageCars />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/customers" element={<ManageCustomers />} />
        <Route path="/chat" element={<CustomerChat />} />
        <Route path="/admin/chat" element={<AdminChat />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App