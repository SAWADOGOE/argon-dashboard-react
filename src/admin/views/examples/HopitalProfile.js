
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
    Col, Table, Media, Badge, Progress, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from "reactstrap";
// core components
import UserHeader from "admin/components/Headers/UserHeader.js";
import {deleteData} from "../../../services";
import {useState} from "react";

const HopitalProfile = () => {
    const [listeHopital, setListeHopital] = useState([]);
    const [HopitalEnCours, setHopitalEnCours] = useState({ nom: '', description: '', prix: '', nombre: '' });

    const supprimerProduit = async (id) => {
        try {
            // Envoi d'une requête DELETE à votre API en utilisant deleteData
            await deleteData(`/medicaments/${id}`);

            // Filtrer le produit supprimé de la liste des produits
            const produitsMisAJour = listeHopital.filter(produit => produit.id !== id);
            setListeHopital(produitsMisAJour);

            alert("Produit supprimé avec succès !");
        } catch (error) {
            console.error("Erreur lors de la suppression du produit:", error);
            alert("Erreur lors de la suppression du produit.");
        }
    };
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
                                        <h3 className="mb-0">My account</h3>
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
                                                        Username
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
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
                                                        Email address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        placeholder="jesse@example.com"
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
                                                        First name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Lucky"
                                                        id="input-first-name"
                                                        placeholder="First name"
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
                                                        Last name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Jesse"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        Ajouter un medecin
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        nom
                                                    </label>

                                                    <Input
                                                        name="nom"

                                                        type="text"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        adresse
                                                    </label>

                                                    <Input
                                                        name="date"

                                                        type="text"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Telephone
                                                    </label>

                                                    <Input
                                                        name="date"

                                                        type="number"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Ajouter
                                                </Button>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Postal
                                                    </label>

                                                    <Input
                                                        name="date"

                                                        type="number"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                            </Col>
                                        </Row>
                                    </div>



                                    <h6 className="heading-small text-muted mb-4">
                                        Ajouter un patient
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                {/*
                          <Input name="nom" value={produitEnCours.nom} onChange={onChangeProduit} type="text" />
*/}
                                                {/*
                          <Input name="description" value={produitEnCours.description} onChange={onChangeProduit} type="text" />
*/}
                                                {/*
                          <Input name="prix" value={produitEnCours.prix} onChange={onChangeProduit} type="number" />
*/}









                                            </Col>


                                            <Col lg="6">
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Nom du produit
                                                    </label>
                                                    <Input name="nom"  type="text"/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        description du produit
                                                    </label>
                                                    <Input name="description"  type="text"/>
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
                                                        prix du produit
                                                    </label>
                                                    <Input name="prix"  type="number"/>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        prix du produit
                                                    </label>
                                                    <Input name="prix"  type="number"/>
                                                </FormGroup>
                                            </Col>



                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        prix du produit
                                                    </label>
                                                    <Input name="prix"  type="number"/>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Quantié du produit
                                                    </label>
                                                    <Input name="nombre"  type="number" />
                                                </FormGroup>

                                                <Button className = 'btn-success'  >Enregistrer le produit</Button>
                                            </Col>
                                        </Row>

                                    </div>




                                    <h6 className="heading-small text-muted mb-4">
                                        Gerer un remboursement
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                {/*
                          <Input name="nom" value={produitEnCours.nom} onChange={onChangeProduit} type="text" />
*/}
                                                {/*
                          <Input name="description" value={produitEnCours.description} onChange={onChangeProduit} type="text" />
*/}
                                                {/*
                          <Input name="prix" value={produitEnCours.prix} onChange={onChangeProduit} type="number" />
*/}









                                            </Col>


                                            <Col lg="6">
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Nom du produit
                                                    </label>
                                                    <Input name="nom"  type="text"/>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        description du produit
                                                    </label>
                                                    <Input name="description"  type="text"/>
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
                                                        prix du produit
                                                    </label>
                                                    <Input name="prix"  type="number"/>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        prix du produit
                                                    </label>
                                                    <Input name="prix"  type="number"/>
                                                </FormGroup>
                                            </Col>



                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        prix du produit
                                                    </label>
                                                    <Input name="prix"  type="number"/>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Quantié du produit
                                                    </label>
                                                    <Input name="nombre"  type="number" />
                                                </FormGroup>

                                                <Button className = 'btn-success'  >Enregistrer le produit</Button>
                                            </Col>
                                        </Row>

                                    </div>








                                    <hr className="my-4" />
                                    {/* Description */}
                                    <h6 className="heading-small text-muted mb-4">About me</h6>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <label>About Me</label>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="A few words about you ..."
                                                rows="4"
                                                defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                                                type="textarea"
                                            />
                                        </FormGroup>
                                    </div>
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
                            <h3 className="mb-0">Listes des demandes de remboursement</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Description</th>
                                <th scope="col">prix</th>
                                <th scope="col">Quantité</th>
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



                        <CardHeader className="border-0">
                            <h3 className="mb-0">Listes des medecins de l'hopital</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Description</th>
                                <th scope="col">prix</th>
                                <th scope="col">Quantité</th>
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

export default HopitalProfile;
