import Loadable from 'react-loadable';

import Loading from '../components/Loading';

export default (loader,loading = Loading)=>{
    return Loadable({
        loader,
        loading
    });
}