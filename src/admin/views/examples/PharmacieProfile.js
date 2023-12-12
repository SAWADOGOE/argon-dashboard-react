/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Table,
    Media,
    Badge,
    Progress,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
  } from "reactstrap";
  // core components
  import UserHeader from "admin/components/Headers/UserHeader.js";
  
  const PharmacieProfile = () => {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Commentaires</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Compte pharmacie</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nom de la pharmacie
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="pharmacie du coeur"
                              id="input-username"
                              placeholder="pharmacie du coeur"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email de la pharmacie
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="coeur@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Adresse de la pharmacie
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="10 metres de la banque BCB"
                              id="input-first-name"
                              placeholder="10 metres de la banque BCB"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Numero de la pharmacie
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="67542317"
                              id="input-last-name"
                              placeholder="67542317"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                     Ajouter un produit
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Nom du produit
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Paracetamol"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>

                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-city"
                            >
                              description
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="description"
                                id="input-city"
                                placeholder="description du produit"
                                type="text"
                            />
                          </FormGroup>

                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-city"
                            >
                              Prix
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="prix du produit"
                                id="input-city"
                                placeholder="prix du produit"
                                type="number"
                            />
                          </FormGroup>

                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-city"
                            >
                              Quantité
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="New York"
                                id="input-city"
                                placeholder="quantité"
                                type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                        <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Ajouter
                      </Button>
                        </Col>
                        
                        
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Listes des produits disponible dans la pharmacie</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                          SAWADOGO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Emmanuel</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        275353435
                      </Badge>
                    </td>

                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        emmanuel@gmail.com
                      </Badge>
                    </td>
                    
                    
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editer
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Supprimer
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>




                  </tbody>
              </Table>
            </Card>
          </div>
        </Row>



      </>
    );
  };
  
  export default PharmacieProfile;
  