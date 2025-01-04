import { CiGrid41 } from 'react-icons/ci';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center">
      <div className="flex items-center justify-center">
      <CiGrid41 />
        <span className="font-bold ml-2">Task</span>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
