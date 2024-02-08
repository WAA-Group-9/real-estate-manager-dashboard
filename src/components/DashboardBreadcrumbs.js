import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const DynamicBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {value}
                    </Typography>
                ) : (
                    <Link underline="hover" color="inherit" href={to} key={to}>
                        {value}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default DynamicBreadcrumbs;