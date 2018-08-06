

$(document).ready(function()
{
  $.validator.addMethod("special",function(value,char)
    {
      return this.optional(char)||/^[a-z0-9\_]+@+$/i.test(value)},""),
  $.validator.addMethod("lower",function(value,char)
    {
      return this.optional(char)||/[a-z]+/.test(value)},""),
  $.validator.addMethod("uper",function(value,char)
    {
      return this.optional(char)||/[A-Z]+/.test(value)},""), 
  $("#formValidation").validate(
    {
      rules:{
        Email:{
         required:(!0)
        },
        Password:{
          required:(!0),minlength:(8), lower:(!0),uper:(!0)          
        }
        },
        messages:{
         
          Password:{
            required:"enter password", minlength:"length greater than 8", lower:"one Lower case alphabet", uper:"one Upper case alphabet"
            }
          },
         
         
          highlight: function (char) {
            $(char).parent().addClass('error')
        },
        unhighlight: function (char) {
            $(char).parent().removeClass('error')
        }
        }
        ) 
  
});  