import React from 'react';
import Badge from 'react-bootstrap/Badge';


const RatioLabel = (totalPrediction, goodPrediction) => {
    if (totalPrediction === 0) {
        return <Badge pill variant="secondary">No data</Badge>;
    }
    const ratio = (goodPrediction / totalPrediction).toFixed(3);
    if (ratio < 0.5) {
        return <Badge pill variant="danger">{ratio}</Badge>;
    } else if (ratio < 0.8) {
        return <Badge pill variant="warning">{ratio}</Badge>;
    } else if (ratio < 1000) {
        return <Badge pill variant="success">{ratio}</Badge>;
    } else {
        return <Badge pill variant="warning">Error</Badge>;
    }
}

export default RatioLabel;