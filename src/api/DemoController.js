class DemoController{
  constructor(){
    
  }

  async demo(ctx){
    ctx.body = {
      code: 200,
      msg: 'success',
      data: 'hello'
    }
  }
}
export default new  DemoController()