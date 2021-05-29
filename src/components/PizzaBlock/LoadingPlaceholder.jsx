import ContentLoader from 'react-content-loader';

function LoadingPlaceholder(props) {
    return (
        <ContentLoader className="pizza-block" speed={2} width={280} height={486} viewBox="0 0 280 486" backgroundColor="#f3f3f3" foregroundColor="#e6e6e6">
            <circle cx="139" cy="120" r="119" />
            <rect x="0" y="258" rx="6" ry="6" width="279" height="30" />
            <rect x="0" y="298" rx="6" ry="6" width="277" height="71" />
            <rect x="0" y="378" rx="6" ry="6" width="85" height="41" />
            <rect x="125" y="378" rx="20" ry="20" width="154" height="41" />
        </ContentLoader>
    );
}

export default LoadingPlaceholder;
