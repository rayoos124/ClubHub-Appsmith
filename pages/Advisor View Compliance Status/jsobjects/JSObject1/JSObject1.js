export default {
getBackground: (complianceStatus) => {
  if (complianceStatus == 1) return "#b8f7b0";
  else if (complianceStatus == 0) return "#f7bcb0";
  else return "#f57b42";
}
	}