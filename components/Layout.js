import Nav from '../components/Nav'

const Layout = ({ children }) => {
    return (
        <div className="mx-auto min-h-screen py-32">
            <Nav/>
            { children }
        </div>
    );
}
 
export default Layout;