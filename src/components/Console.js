import { ShieldFill } from "react-bootstrap-icons"

export default function Console() {
    return (
        <>
            <NavBar />
        </>
    )
}


const NavBar = () => {
    return (
        <nav className="side-nav fixed-left bg-dark d-flex flex-column p-3">
            <div className="d-flex flex-row align-items-center">
                <ShieldFill color="white" height="100%" width={32} className="mr-3" />
                <h2 className="text-white ml-3">PANEL</h2>
            </div>
            <hr  className="bg-light" style={{width: "100%", height:"1px"}} />
            <div className="navbar-nav">
                <a className="nav-item nav-link active">Clients</a>
                <a className="nav-item nav-link">Workouts</a>
            </div>
        </nav>
    )
}