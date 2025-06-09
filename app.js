function App() {
    try {
        const { user, loading } = useAuth();
        const { currentPath, navigate } = useRouter();

        React.useEffect(() => {
            if (user && currentPath === '/') {
                navigate('/dashboard');
            }
        }, [user, currentPath, navigate]);

        if (loading) {
            return React.createElement('div', {
                className: 'd-flex justify-content-center align-items-center',
                style: { height: '100vh' },
                'data-name': 'loading-container',
                'data-file': 'app.js'
            },
                React.createElement('div', { className: 'spinner-border text-primary' })
            );
        }

        if (!user) {
            return React.createElement(Login);
        }

        return React.createElement('div', {
            className: 'd-flex min-vh-100',
            'data-name': 'main-app-container',
            'data-file': 'app.js'
        },
            React.createElement(SettingsButton),
            React.createElement('div', { className: 'sidebar-container' },
                React.createElement(Sidebar)
            ),
            React.createElement('div', { className: 'flex-grow-1' },
                React.createElement(Header),
                React.createElement('main', { className: 'flex-grow-1' },
                    React.createElement(Route, { path: '/dashboard', component: Dashboard }),
                    React.createElement(Route, { path: '/compras', component: Compras }),
                    React.createElement(Route, { path: '/contactos', component: Contactos }),
                    React.createElement(Route, { path: '/negocios', component: Negocios }),
                    React.createElement(Route, { path: '/tickets', component: Tickets })
                )
            )
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

function CRMApp() {
    try {
        return React.createElement(AuthProvider, null,
            React.createElement(Router, null,
                React.createElement(App)
            )
        );
    } catch (error) {
        console.error('CRMApp component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(CRMApp));
