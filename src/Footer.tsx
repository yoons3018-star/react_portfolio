import footer from './assets/css/section/footer.module.css';

function Footer() {
  return (
    <>
     <footer id="footer" className={footer.footer}>
      <div className={footer.footer_inner}>
          <div className={footer.footer_text}>
              <span>webstoryboy</span>
              <span>© webs</span>
          </div>

          <div className={footer.footer_right}>
              © 2025 Copylight React,Vite Homepage<br />
              
          </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
