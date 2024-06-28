import './Home.css';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>GymChope</h1>
                <div className="header-icons">
                </div>
            </header>

            <section className="notifications-section">
                <h2>Notifications</h2>
                <table className="notifications-table">
                    <tbody>
                    <tr>
                        <td>No notifications available.</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <section className="features-section">
                <Link to="/booking" className="feature">
                    
                    <p>Booking</p>
                    <span>Book a gym slot</span>
                </Link>
                <Link to="/manage-bookings" className="feature">
                    
                    <p>Manage Bookings</p>
                    <span>View and cancel gym slots</span>
                </Link>
                <Link to="/feedback-report" className="feature">
                    
                    <p>Feedback/Report</p>
                    <span>Report faulty equipment / issues</span>
                </Link>
                <Link to="/booking-history" className="feature">
                    
                    <p>Booking History</p>
                    <span>Check your history</span>
                </Link>
                <Link to="/collect-return-card" className="feature">
                    
                    <p>Collect/Return Card</p>
                    <span>Indicate your collection/return of gym card</span>
                </Link>
            </section>
        </div>
    );
};

export default HomePage;