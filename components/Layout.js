import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
            <Nav/>
            { children }
        </div>
    );
}
 
export default Layout;