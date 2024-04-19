function Navbar(){
    return(
        <>
            <div className="par">
                <img src="https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-banner-1.jpg" alt="" />
                <div className="nav">
                    <div className="logo">99acres</div>
                    <i className="fa-solid fa-bars" id="hamb" onClick={Hamburger}></i>
                    <ul>
                        <li><a href="">For Buyers</a></li>
                        <li><a href="">For Tenants</a></li>
                        <li><a href="">For Owners</a></li>
                        <li><a href="">For Dealers/Builders</a></li>
                        <li><a href="">Insights</a></li>

                    </ul>
                </div>
                <div className="cont1">
                    <div className="opt">
                        <ul>
                            <li><a href="">Buy</a></li>
                            <li><a href="">Rent</a></li>
                            <li><a href="">New Launch</a></li>
                            <li><a href="">PG / Co-Living</a></li>
                            <li><a href="">Commercial</a></li>
                            <li><a href="">Plots/Land</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>
                    <div className="search-btn">
                        <p>All Destinations</p>
                        <input type="text" placeholder="Search"/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
function Hamburger(){
    document.body.classList.toggle('hamburger-menu');
}
export default Navbar