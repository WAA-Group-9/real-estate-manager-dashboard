import { Card, CardContent, Typography } from '@mui/material';

const SummaryItem = ({ title, count }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryItem;