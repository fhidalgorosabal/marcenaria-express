import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks";

const NotFound = () => {
  const { translate } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        {translate("not-found-page-title")}
      </h1>
      <p className="text-gray-600 mb-4">
        {translate("not-found-page-subtitle")}
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
        {translate("return-home")}
      </Link>
    </div>
  );
};

export default NotFound;
