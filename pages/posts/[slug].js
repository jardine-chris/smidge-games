import { Post } from "../../components/Post/Post"

export default function SinglePost(props) {
  const { slug } = props;
  return <Post slug={slug} />
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  // If slug is "undefined", since "undefined" cannot be serialized, server will throw error
  // But null can be serializable
  if (!slug) {
    slug = null;
  }
  // now we are passing the slug to the component
  return { props: { slug: slug } };
};
