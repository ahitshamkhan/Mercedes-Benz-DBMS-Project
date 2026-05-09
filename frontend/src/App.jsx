import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import CarDetail from './pages/CarDetail'
import CategoryPage from './pages/CategoryPage'
import SearchResults from './pages/SearchResults'
import NewArrivals from './pages/NewArrivals'
import PlaceOrder from './pages/PlaceOrder'
import MyOrders from './pages/MyOrders'
import OrderTracking from './pages/OrderTracking'
import Wishlist from './pages/Wishlist'
import BookTestDrive from './pages/BookTestDrive'
import ServiceBooking from './pages/ServiceBooking'
import MyServiceHistory from './pages/MyServiceHistory'
import MyTestDrives from './pages/MyTestDrives'
import AllDealerships from './pages/AllDealerships'
import DealershipDetail from './pages/DealershipDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import ChangePassword from './pages/ChangePassword'
import AdminDashboard from './pages/AdminDashboard'
import ManageCars from './pages/ManageCars'
import ManageOrders from './pages/ManageOrders'
import ManageCustomers from './pages/ManageCustomers'
import CustomerChat from './pages/CustomerChat'
import AdminChat from './pages/AdminChat'
import About from './pages/About'

// Protected Routes
import {
  ProtectedRoute,
  AdminRoute,
  GuestRoute
} from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC — Anyone can access */}
        <Route path="/"                element={<Home />} />
        <Route path="/about"           element={<About />} />
        <Route path="/car/:id"         element={<CarDetail />} />
        <Route path="/category/:type"  element={<CategoryPage />} />
        <Route path="/search"          element={<SearchResults />} />
        <Route path="/new-arrivals"    element={<NewArrivals />} />

        {/*  GUEST ONLY — Already logged in? go home */}
        <Route path="/login"    element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

        {/* CUSTOMER — Must be logged in */}
        <Route path="/place-order"       element={<ProtectedRoute><PlaceOrder /></ProtectedRoute>} />
        <Route path="/my-orders"         element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path="/order-tracking/:id" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
        <Route path="/wishlist"          element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="/book-test-drive"   element={<ProtectedRoute><BookTestDrive /></ProtectedRoute>} />
        <Route path="/service-booking"   element={<ProtectedRoute><ServiceBooking /></ProtectedRoute>} />
        <Route path="/dealerships"    element={<ProtectedRoute><AllDealerships /></ProtectedRoute>} />
        <Route path="/dealership/:id" element={<ProtectedRoute><DealershipDetail /></ProtectedRoute>} />
        <Route path="/my-service-history" element={<ProtectedRoute><MyServiceHistory /></ProtectedRoute>} />
        <Route path="/my-test-drives"    element={<ProtectedRoute><MyTestDrives /></ProtectedRoute>} />
        <Route path="/profile"           element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="/change-password"   element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        <Route path="/chat"              element={<ProtectedRoute><CustomerChat /></ProtectedRoute>} />

        {/*ADMIN ONLY — Must be admin */}
        <Route path="/admin"            element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin/cars"       element={<AdminRoute><ManageCars /></AdminRoute>} />
        <Route path="/admin/orders"     element={<AdminRoute><ManageOrders /></AdminRoute>} />
        <Route path="/admin/customers"  element={<AdminRoute><ManageCustomers /></AdminRoute>} />
        <Route path="/admin/chat"       element={<AdminRoute><AdminChat /></AdminRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App