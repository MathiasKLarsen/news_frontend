const Footer = () => {
  return (
    <footer className='flex flex-col py-2 bg-black text-white'>
      <section className='grid grid-cols-4 h-50 text-center items-center gap-5'>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
      </section>
      <section className='flex py-5 justify-center border-t-2'>
          <p>
            &copy; | TLF: 12 34 56 78
          </p>
      </section>
    </footer>
  )
}

export default Footer