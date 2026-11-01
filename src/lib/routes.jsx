import { createBrowserRouter, redirect } from "react-router";
import BlogPage from "../Pages/Blog.jsx";
import CartPage from "../Pages/Cart.jsx";
import ContactUSPage from "../Pages/ContactUS.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ProductPage from "../Pages/Product.jsx";
import UserLayout from "@/Components/Layouts/UserLayout.jsx";
import AboutUSPage from "@/Pages/AboutUS.jsx";
import AuthPage from "@/Pages/AuthPage.jsx";
import CMSLayout from "@/Components/Layouts/CMSLayout.jsx";
import NotFound from "@/Pages/NotFound.jsx";
import GEThandler from "@/API/GEThandler.js";
import Forbidden from "@/Pages/Forbidden.jsx";
import ModeratorProducts from "@/Pages/Dashboard/Moderator/products/Page.jsx";
import ModeratorCategories from "@/Pages/Dashboard/Moderator/categories/page.jsx";
import ModeratorUsers from "@/Pages/Dashboard/Moderator/users/page.jsx";
import { Suspense } from "react";
import ProductCardSkeleton from "@/Components/Templates/Home/Latest-Products/ProductCardSkeleton.jsx";
import ErrorBoundary from "@/Components/Common/ErrorBoundary.jsx";
import Modal from "@/Components/Templates/Dashboard/common/Modal/index.jsx";
import ErrorBox from "@/Components/Common/ErrorBox.jsx";
import CheckoutPage from "@/Pages/Checkout.jsx";
import CategoriesPage from "@/Pages/CategoriesPage.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about-us", element: <AboutUSPage /> },
            { path: "contact-us", element: <ContactUSPage /> },
            { path: "cart", element: <CartPage/> },
            { path: "checkout", element: <CheckoutPage /> },
            { path: "product/:slug", element: <ErrorBoundary fallback={<div className="my-9 h-3"><Modal alert isOpen><ErrorBox/></Modal></div>}><Suspense fallback={<div className="p-8 flex gap-3"><ProductCardSkeleton/><ProductCardSkeleton/></div>}><ProductPage /></Suspense></ErrorBoundary>, loader:({ params }) => {
              return { productPromise: GEThandler(`products/${params.slug}`) }
            }},
            { path: "articles", element: <BlogPage /> },
        ],
    },
    {   path: "/categories", 
      element: <CategoriesPage /> },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
      path:'/forbidden',
      element :<Forbidden/>
    },
    {
        path: "/dashboard",
        element: <CMSLayout/>,
        children: [
            { path:'moderator',
              loader:async () => {
                try {
                  const {data}=await GEThandler('auth/me',{withCredentials:true})
                  if (!data.user.roles.includes('ADMIN')) {
                    return redirect('/forbidden')
                  }
                  return data.user
                } catch (error) {
                  return redirect('/auth')
                }
              },
              children:[
                {index:true,loader:()=>redirect('home')},
                {path:'home',element:<div className="mr-15">صفحه پیشخوان فعلا توسعه داده نشده</div>},
                {path:'orders',element:<div className="mr-15">صفحه سفارشات فعلا توسعه داده نشده</div>},
                {path:'products',element:<ModeratorProducts/>},
                {path:'categories',element:<ModeratorCategories/>},
                {path:'users',element:<ModeratorUsers/>},
                {path:'sellers',element:<div className="mr-15">صفحه فروشنده ها فعلا توسعه داده نشده</div>},
                {path:'offs',element:<div className="mr-15">صفحه تخفیفات فعلا توسعه داده نشده</div>},
              ]
             },
            { path:'user',
              children:[
                {index:true,loader:()=>redirect('home')},
                {path:'home',element:<div className="mr-15">صفحه پیشخوان فعلا توسعه داده نشده</div>},
                {path:'orders',element:<div className="mr-15">صفحه شفارشات فعلا توسعه داده نشده</div>},
              ]
             },
            // { path:'seller',
            //   children:[
            //     {index:true,loader:()=>redirect('home')},
            //     {path:'home',element:<div>home page</div>},
            //     {path:'orders',element:<div>orders page</div>},
            //     {path:'products',element:<div>products page</div>},
            //   ]
            //  },
        ],
    },
    {path:'*',element:<NotFound/>}
], { basename: import.meta.env.BASE_URL });
export default router;
