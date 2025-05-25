import { BannerType } from "../../types";
import "../../assets/styles/banner.css";

const Banner = ({
  title,
  subtitle,
  content,
  children,
  className = "",
}: BannerType) => {
  return (
    <div className="relative w-full">
      <div className="bg-banner absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-screen flex items-center justify-center">
        <div className={`text-center px-4 ${className}`}>
          {title && (
            <h1
              className="text-5xl text-gray-300 font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {subtitle && (
            <h2
              className="text-3xl text-gray-300 font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          {content && (
            <p
              className="text-2xl text-white mb-8"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
