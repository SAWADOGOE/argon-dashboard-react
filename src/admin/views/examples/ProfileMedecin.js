// PharmacieProfile.js

// ... (importations et autres parties du code)

import { getById, getData, saveData, deleteData, updateData } from "../../../services";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, Table } from "reactstrap";
import UserHeader from "admin/components/Headers/UserHeader.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileMedecin = () => {
    let navigate = useNavigate();
    const [listeTraitement, setListeTraitement] = useState([]);
    const [traitementEnCours, setTraitementEnCours] = useState({ date:'', cout: '', montant_reclame:'', statut_reclamation: '', description:'', prestataire:'', patient: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getData("/traitements/");
                setListeTraitement(res.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };

        fetchData();
    }, []);



    const onChangeProduit = (e) => {
        setTraitementEnCours({
            ...traitementEnCours,
            [e.target.name]: e.target.value
        });
    };


    const getByIdAndSetProduitEnCours = async (id) => {
        try {
            const res = await getById("/traitements", id);
            setTraitementEnCours({
                ...traitementEnCours,

                date:res?.data.date,
                cout: res?.data.cout,
                montant_reclame:res?.data.montant_reclame,
                statut_reclamation: res?.data.statut_reclamation,
                description:res?.data.description,
                prestataire:res?.data.prestataire,
                patient: res?.data.patient,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des données par ID", error);
        }
    };

    const ajouterOuMettreAJourProduit = () => {
        if (traitementEnCours.id) {
            // Mise à jour du produit existant dans listeTraitement
            setListeTraitement(listeTraitement.map(prod => prod.id === traitementEnCours.id ? traitementEnCours : prod));
        } else {
            // Ajout d'un nouveau produit
            setListeTraitement([...listeTraitement, { ...traitementEnCours, id: Date.now() }]); // Assurez-vous que 'id' est unique
        }
        setTraitementEnCours({ date:'', cout: '', montant_reclame:'', statut_reclamation: '', description:'', prestataire:'', patient: '' }); // Réinitialiser le formulaire
    };

    const onSubmitInfos = async () => {
        try {
            const method = traitementEnCours.id ? 'put' : 'post';
            const url = traitementEnCours.id ? `/traitements/${traitementEnCours.id}/` : '/traitements/';

            // Envoi des données du produit en cours
            const response = await (method === 'put' ? updateData : saveData)(url, traitementEnCours);

            // Mise à jour de la liste des produits ou traitement de la réponse
            if (method === 'post') {
                // Ajouter le nouveau produit à la liste
                setListeTraitement([...listeTraitement, { ...traitementEnCours, id: response.data.id }]);
            } else {
                // Mettre à jour le produit existant dans la liste
                setListeTraitement(listeTraitement.map(prod => prod.id === traitementEnCours.id ? { ...traitementEnCours } : prod));
            }

            // Réinitialiser uniquement le formulaire (traitementEnCours), pas la liste des produits
            setTraitementEnCours({ date:'', cout: '', montant_reclame:'', statut_reclamation: '', description:'', prestataire:'', patient: ''});

            alert("Reclamation enregistré avec succès!");

        } catch (error) {
            console.error("Erreur lors de l'envoi des données:", error);

            alert("Erreur lors de l'enregistrement du produit.");
        }
    };

    const supprimerProduit = async (id) => {
        try {
            // Envoi d'une requête DELETE à votre API en utilisant deleteData
            await deleteData(`/traitements/${id}`);

            // Filtrer le produit supprimé de la liste des produits
            const produitsMisAJour = listeTraitement.filter(produit => produit.id !== id);
            setListeTraitement(produitsMisAJour);

            //alert("Produit supprimé avec succès !");
        } catch (error) {
            console.error("Erreur lors de la suppression du produit:", error);
            alert("Erreur lors de la suppression du produit.");
        }
    };

    return (
        <>
            <UserHeader />
            {/* Reste du code... */}

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
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Numero d'assurance du patient
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
                                                        Date de naissance
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-date"
                                                        type="date"
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
                                                        Sexe
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
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Adresse du patient
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
                                        Ajouter un traitement
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                {/*
                          <Input name="nom" value={traitementEnCours.nom} onChange={onChangeProduit} type="text" />
*/}
                                                {/*
                          <Input name="description" value={traitementEnCours.description} onChange={onChangeProduit} type="text" />
*/}
                                                {/*
                          <Input name="prix" value={traitementEnCours.prix} onChange={onChangeProduit} type="number" />
*/}









                                            </Col>


                                            <Col lg="6">
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        date
                                                    </label>
                                                    <Input
                                                        name="date"
                                                        value={traitementEnCours.date}
                                                        onChange={onChangeProduit}
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-date"
                                                    >
                                                        cout
                                                    </label>
                                                    <Input name="cout" value={traitementEnCours.cout} onChange={onChangeProduit} type="number"/>
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
                                                        montant reclame
                                                    </label>
                                                    <Input name="montant_reclame" value={traitementEnCours.montant_reclame} onChange={onChangeProduit} type="number"/>
                                                </FormGroup>

                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-numero"
                                                    >
                                                        statut reclamation                                                    </label>
                                                    <Input name="statut_reclamation" value={traitementEnCours.statut_reclamation} onChange={onChangeProduit} type="text
                                                    " />
                                                </FormGroup>

                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-numero"
                                                    >
                                                        patient                                                    </label>
                                                    <Input name="patient" value={traitementEnCours.patient} onChange={onChangeProduit} type="number
                                                    " />
                                                </FormGroup>


                                            </Col>
                                            <Col lg="6">
                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-adresse"
                                                    >
                                                        description
                                                    </label>
                                                    <Input name="description" value={traitementEnCours.description} onChange={onChangeProduit} type="text" />
                                                </FormGroup>

                                                <FormGroup >
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-numero"
                                                    >
                                                        prestataire                                                    </label>
                                                    <Input name="prestataire" value={traitementEnCours.prestataire} onChange={onChangeProduit} type="number
                                                    " />
                                                </FormGroup>


                                                <Button className = 'btn-success' onClick={onSubmitInfos} >Enregistrer la reclamation</Button>
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
                        {/* ...autres parties de votre composant... */}

                        {/* Tableau des produits */}
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Numero</th>
                                <th scope="col">date</th>
                                <th scope="col">cout</th>
                                <th scope="col">montant_reclame</th>
                                <th scope="col">statut_reclamation</th>
                                <th scope="col">description</th>
                                <th scope="col">prestataire</th>
                                <th scope="col">patient</th>
                                <th scope="col">Action</th>

                            </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(listeTraitement) && listeTraitement.map((item, index) => (
                                <tr key={item.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{item.date}</td>
                                    <td>{item.cout}</td>
                                    <td>{item.montant_reclame}</td>
                                    <td>{item.statut_reclamation}</td>
                                    <td>{item.description}</td>
                                    <td>{item.prestataire}</td>
                                    <td>{item.patient}</td>
                                    <td>{item.Action}</td>
                                    <td>
                                        {/* Bouton pour modifier le produit */}
                                        <Button color="primary" size="sm" onClick={() => getByIdAndSetProduitEnCours(item.id)}>
                                            Modifier
                                        </Button>
                                        <Button color="danger" size="sm" onClick={() => supprimerProduit(item.id)}>
                                            Supprimer
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        {/* ...autres parties de votre composant... */}

                    </Card>
                </div>
            </Row>      </>
    );
};

export default ProfileMedecin;
