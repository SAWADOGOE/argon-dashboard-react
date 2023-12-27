
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
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {getById, saveData, updateData} from "../../../services";

const Reclamation = () => {

    let navigate = useNavigate()

    const [listeReclamation, setListeReclamation] = useState([]);
    const [reclamationEnCours, setreclamationEnCours] = useState({ date: '', montant: '', status: '', description: '', patient: '' });

    const onChangeReclamation = (e) => {
        setreclamationEnCours({
            ...reclamationEnCours,
            [e.target.name]: e.target.value
        });
    };


    const getByIdAndSetReclamationEnCours = async (id) => {
        try {
            const res = await getById("/reclamations", id);
            setreclamationEnCours({
                ...reclamationEnCours,
                date: res?.data?.date,
                montant: res?.data?.montant,
                status: res?.data?.status,
                description: res?.data?.description,
                patient: res?.data?.patient,
                id: res?.data?.id
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des données par ID", error);
        }
    };



    const onSubmitInfos = async () => {
        try {
            const method = reclamationEnCours.id ? 'put' : 'post';
            const url = reclamationEnCours.id ? `/medicaments/${reclamationEnCours.id}/` : '/medicaments/';

            // Envoi des données du produit en cours
            const response = await (method === 'put' ? updateData : saveData)(url, reclamationEnCours);

            // Mise à jour de la liste des produits ou traitement de la réponse
            if (method === 'post') {
                // Ajouter le nouveau produit à la liste
                setreclamationEnCours([...listeReclamation, { ...reclamationEnCours, id: response.data.id }]);
            } else {
                // Mettre à jour le produit existant dans la liste
                setreclamationEnCours(listeReclamation.map(prod => prod.id === reclamationEnCours.id ? { ...reclamationEnCours } : prod));
            }

            // Réinitialiser uniquement le formulaire (produitEnCours), pas la liste des produits
            setreclamationEnCours({ date: '', montant: '', status: '', description: '', patient: '' });

            alert("Produit enregistré avec succès!");

        } catch (error) {
            console.error("Erreur lors de l'envoi des données:", error);

            alert("Erreur lors de l'enregistrement du produit.");
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
                                        <h3 className="mb-0">Formulaire de remboursement</h3>
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
                                                        Nom du patient
                                                    </label>

                                                    <Input
                                                        name="nom"
                                                        value={reclamationEnCours}
                                                        onChange={onChangeReclamation}
                                                        type="select"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        date
                                                    </label>

                                                    <Input
                                                        name="date"
                                                        value={reclamationEnCours}
                                                        onChange={onChangeReclamation}
                                                        type="date"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Montant total
                                                    </label>

                                                    <Input
                                                        name="montant_total"
                                                        value={reclamationEnCours}
                                                        onChange={onChangeReclamation}
                                                        type="number"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        description
                                                    </label>

                                                    <Input
                                                        name="description"
                                                        value={reclamationEnCours}
                                                        onChange={onChangeReclamation}
                                                        type="text"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>

                                                {/*<FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        ordonnance 1
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="file"
                                                    />
                                                </FormGroup>*/}




                                                {/*<FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        ordonnance 2
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="file"
                                                    />
                                                </FormGroup>*/}


                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Envoyer
                                                </Button>

                                            </Col>
                                            <Col lg="6">
                                                {/*<FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Telephone du patient
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Telephone"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="number"
                                                    />
                                                </FormGroup>
*/}


                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        status
                                                    </label>

                                                    <Input
                                                        name="status"
                                                        value={reclamationEnCours}
                                                        onChange={onChangeReclamation}
                                                        type="select"
                                                    >
                                                        {/* Assurez-vous d'inclure les options ici */}
                                                    </Input>
                                                </FormGroup>




                                                {/*<FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Ordonnace 2
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="file"
                                                    />
                                                </FormGroup>*/}






                                                {/*<FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        ordonnance 2
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="file"
                                                    />
                                                </FormGroup>*/}



                                            </Col>
                                        </Row>
                                    </div>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>


        </>
    );
};

export default Reclamation;
