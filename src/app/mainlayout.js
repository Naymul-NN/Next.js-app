import Navbar from "@/components/shared/Navbar";

export default function Layout({ children }) {
    return (
      <div>
        
         <Navbar/>
          {children}
      </div>
    )
  }