import { useRouter } from "next/router";

//SSGの場合
export async function getStaticProps({params}) {

    
}

const Product = () => {
    const router = useRouter();
    console.log(router.query.id);
    const { id } = router.query;
    return <div>任意のID</div>;
};

export default Product;