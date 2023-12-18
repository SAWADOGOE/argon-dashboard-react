import React, {useState} from 'react';
import {NavLink as NavLinkRRD, useNavigate} from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Button, Nav, NavItem, NavLink
} from 'reactstrap';
import routes from '../../../assuranceRoutes';
import assuranceRoutes from "../../../assuranceRoutes"; // Assurez-vous que le chemin est correct

const AssuranceNavbar = () => {
    const navigate = useNavigate();

    // Supposons que vous ayez un tableau d'objets comme celui-ci
    const dataForCols = assuranceRoutes.map(route => ({
        title: route.name,
        number: "350,897", // Ce sera dynamique en fonction de vos données
        iconClass: "fas fa-chart-bar", // Définissez l'icône appropriée pour chaque route
        buttonLabel: route.name,
        navigatePath: route.layout + route.path
    }));



    const createLinks = (routes) => {
        return routes.map((prop, key) => {
            return (
                <NavItem key={key}>
                    <NavLink
                        to={prop.layout + prop.path}
                        tag={NavLinkRRD}
                        onClick={closeCollapse}
                    >
                        <i className={prop.icon} />
                        {prop.name}
                    </NavLink>
                </NavItem>
            );
        });
    };

    const closeCollapse = () => {
        setCollapseOpen(false);
    };

    const toggleCollapse = () => {
        setCollapseOpen((data) => !data);
    };

    const [collapseOpen, setCollapseOpen] = useState();


    return (


        <Row>
            <Nav navbar>{createLinks(assuranceRoutes)}</Nav>

            {dataForCols.map((data, index) => (
                <Col lg="6" xl="3" key={index}>
                    <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                            <Row>
                                <div className="col">
                                    <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                        {data.title}
                                    </CardTitle>
                                    <span className="h2 font-weight-bold mb-0">
                                        {data.number}
                                    </span>
                                </div>
                                <Col className="col-auto">
                                    <div className={`icon icon-shape bg-danger text-white rounded-circle shadow`}>
                                        <i className={data.iconClass} />
                                    </div>
                                </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <Button
                                    color="primary"
                                    href="#pablo"
                                    onClick={() => navigate(data.navigatePath)}
                                    size="sm"
                                >
                                    {data.buttonLabel}
                                </Button>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default AssuranceNavbar;
