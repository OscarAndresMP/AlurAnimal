import './Success.css';
import { toast } from 'sonner';

const Success = () => {
    return<>
        <button onClick={() =>toast.success('Exitoso n_n', {position: 'top-center', className: 'toast'})}>Presionar</button>
        </>
}

export default Success;