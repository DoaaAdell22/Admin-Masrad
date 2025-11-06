import { useState, Fragment } from "react";
import {
  Link,
  Navigate,
  json,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

function Index() {
  const data = useLoaderData();
  console.log(data);
  const [visiable, setVisiable] = useState(true);

  const navigate = useNavigate();

  return <Navigate to={"/dashboard"} />;
}

export default Index;
