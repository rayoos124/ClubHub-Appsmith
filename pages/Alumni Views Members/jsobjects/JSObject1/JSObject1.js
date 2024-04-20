export default {
getBackground: (status) => {
  if (status == "current_member") return "#70D7F8";
  else if (status == "alumni_member") return "#f6f7b0";
  else return "#70D7F8";
}
}