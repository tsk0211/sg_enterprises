import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Products() {
	const params = useParams();
	return (
	<div>
		Products Page {params.divId}

		<Footer/>
	</div>
);
}

export default Products;
