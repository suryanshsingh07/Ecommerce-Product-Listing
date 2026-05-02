import { Routes, Route, Navigate} from "react-router-dom";
import { useEffect} from "react";

// pages
import Home from "./pages/home";
import DetailedProduct from "./pages/detailedProduct";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// feature pages
import Notifications from "./pages/Notifications";
import Coupons from "./pages/Coupons";
import Orders from "./pages/Orders";
import Advertise from "./pages/Advertise";
import GiftCards from "./pages/GiftCards";
import Support from "./pages/Support";
import UnavailableFeature from "./pages/UnavailableFeature";
import Profile from "./pages/Profile";

// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import wishListBox from './recoil/wishListBox';
import productViewStatus from './recoil/productViewStatus';
import cartItemStatus from "./recoil/cartItemStatus";
import userinfoAtom from "./recoil/userinfoAtom";
import userSignAtom from "./recoil/userSignAtom";
import loadingState from "./recoil/loadingState";

// components
import Loader from "./components/Loader/Loader";


function App() {
  const [wishlistStatus] = useRecoilState(wishListBox);
  const [productStatus] = useRecoilState(productViewStatus);
  const [cartStatus] = useRecoilState(cartItemStatus);
  const [userInfo]=useRecoilState(userinfoAtom);
  const [userSignup]=useRecoilState(userSignAtom);
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [setLoading]);


  // const productItem = product;
  // console.log(selectProduct);
  // console.log(productItem[selectProduct].id);
  // console.log(product[selectProduct-1].id);
  // console.log(userStatus);
  // useEffect(()=>{
  //   if (product[selectProduct-1].id !== selectProduct){
  //     setselectProduct(1);
  //     console.log(selectProduct);
  //   }
  // },[selectProduct]
  // console.log(productStatus);
  

  return (
    <div>  
       <Loader />
       <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Ecommerce-product-listing" element={ <Home />} />
          <Route path="/product" element={  productStatus ? <DetailedProduct /> : <Navigate to="/"/> } />
          <Route path="/wishlist" element={ wishlistStatus ? <Wishlist/> : <Navigate to="/"/> }/>
          <Route path="/cart" element={ cartStatus ? <Cart/> : <Navigate to="/"/>  }/>
          <Route path="/login" element={ userInfo ? <Login/> : <Navigate to="/"/>  }/>
          <Route path="/signup" element={ userSignup ? <Signup/> : <Navigate to="/"/>  }/>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<UnavailableFeature featureName="About Us" />} />
          <Route path="/privacy" element={<UnavailableFeature featureName="Privacy Policy" />} />
          <Route path="/terms" element={<UnavailableFeature featureName="Terms of Service" />} />
          <Route path="/contact" element={<UnavailableFeature featureName="Contact Us" />} />
          <Route path="/logout" element={<UnavailableFeature featureName="Logout" />} />
       </Routes>
    </div>
  );
}

export default App;
