export function roleService() {
    return new Promise((resolve, reject) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
            // authenticate - public
            if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                const params = JSON.parse(opts.body);
                const user = users.find(x => x.username === params.username && x.password === params.password);
                if (!user) return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: 'fake-jwt-token'
                });
            }
}