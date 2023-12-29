import Link from "next/link";


const DashboardLayout = ({ children }) => {
  return (
    <div className="w-[80%] mx-auto flex gap-5 pt-20">
    <div className="w-[30%] bg-pink-400 min-h-screen">
    <header>
        <h1>Dashboard Header</h1>
      </header>
      <nav>
        <ul>
          <li><Link href="/dashboard">Activity</Link></li>
          <li><Link href="/dashboard/profile">Profile</Link></li>    
          <hr/>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
    </div>
     <div className="w-70%">
     <main>
        {children}
      </main>
     </div>
    </div>
  );
};

export default DashboardLayout;
