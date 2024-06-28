

const SearchBar = () => {
    return (
        <div className='flex gap-4 px-10 text-center my-10'>
            <select defaultValue="selected" className='w-64 py-3 pl-4 rounded-lg bg-zinc-200 font-semibold'>
                <option value="selected" disabled hidden >Job Role</option>
                <option value="Front-end Developer" >Front-end Developer</option>
                <option value="Back-end Developer" >Back-end Developer</option>
                <option value="Front ios Developer" >ios Developer</option>
                <option value="Dev Ops" >Dev Ops</option>
            </select>
            <select defaultValue="selected" className='w-64 py-3 pl-4 rounded-lg bg-zinc-200 font-semibold'>
                <option value="selected" disabled hidden >Jop Type</option>
                <option value="Full time" >Full time</option>
                <option value="Intern">Intern</option>
                <option value="Part Time" >Part Time</option>
                <option value="Contact" >Contact</option>
            </select>

            <select defaultValue="selected" className='w-64 py-3 pl-4 rounded-lg bg-zinc-200 font-semibold'>
                <option value="selected" disabled hidden >Location</option>
                <option value="On Site" >On Site</option>
                <option value="Remote" >Remote</option>
                <option value="Hybrid" >Hybrid</option>
            </select>

            <select defaultValue="selected" className='w-64 py-3 pl-4 rounded-lg bg-zinc-200 font-semibold'>
                <option value="selected" disabled hidden >Experience</option>
                <option value="Freshser" >Freshser</option>
                <option value="Junior Level" >Junior Level</option>
                <option value="Mid Level" >Mid Level</option>
                <option value="Senior Level" >Senior Level</option>
            </select>
            <button className='w-64 bg-yellow-600 text-white font-bold rounded-lg py-3'>Search</button>
        </div>
    );
};

export default SearchBar;