import { useEffect, useState } from 'react';

import api from '../../../api';

const EMPTY_USER = {
    name: '',
    surname: '',
    email: '',
};

export default function useUser(id) {
    const [user, setUser] = useState(EMPTY_USER);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isNaN(id)) {
            setUser(EMPTY_USER);
        } else {
            setIsLoading(false);
            api.get('users/' + id)
                .then(({ data }) => setUser(data))
                .finally(() => setIsLoading(false));
        }
    }, [id]);

    function saveUser(user) {
        if (user.id) {
            return updateUser(user);
        } else {
            return createUser(user);
        }
    }

    function updateUser(user) {
        return api.put('users/' + user.id, user);
    }

    function createUser(user) {
        return api.post('users', user);
    }

    return {
        user,
        isLoading,
        saveUser,
    };
}