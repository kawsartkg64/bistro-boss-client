import { Helmet } from 'react-helmet-async';

const DASHBOARD = () => {
    return (
        <div>
            <h4>This is DASHBOARD</h4>
            <Helmet>
                <title className='uppercase'>Dashboard</title>
            </Helmet>
        </div>
    );
};

export default DASHBOARD;