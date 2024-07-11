const LiveChat = () => {
  const liveChat = `
  <script>
    (function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn.bitrix24.com/b15773863/crm/site_button/loader_102_o3wl9e.js');
  </script>
  `;
  return (
    <div className="liveChat min-w-10 min-h-10" dangerouslySetInnerHTML={{ __html: liveChat }} />
  )
}

export default LiveChat