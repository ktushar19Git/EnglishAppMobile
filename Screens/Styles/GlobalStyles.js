import { StyleSheet } from 'react-native'
const Globalstyles = StyleSheet.create({
  ContainerMain: {
    padding: 0,
    margin: 0,
    // backgroundColor:'almond',
    fontFamily: 'Roboto'
  },
  ContainerInner: {
    padding: 10,
    margin: 0,
    backgroundColor: 'white',
  },
  ContainerInner_1: {
    padding: 10,
    margin: 0,
    backgroundColor: 'white',
  },
  Horizontal: {
    flexDirection: 'row'
  },
  Vertical: {
    flexDirection: 'column'
  },
  mp5px: {
    padding: 5,
    margin: 5,
  },
  mp10px: {
    padding: 10,
    margin: 10,
  },
  alignCenter: {
    alignSelf: 'center',
  },
  SubHeading: {
    color: 'blue',
    fontWeight: 'bold',
    width: '100%',


  },

  Heading: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'orangered',
    width: '100%',
    paddingLeft: 500,
  },
  ListView: {
    margin: 5,

  },
  item: {
    height: 75,
    marginBottom: 5,
    backgroundColor: 'azure',
    borderRadius: 5,
  },
  itemHeader: {
    paddingTop: 10,
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  itemDetails: {

    fontSize: 14,
    color: 'green',
    margin: 5,
    paddingBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row'
  },
  itemAvatarColumn: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    height: 75,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginRight: 10,

  },
  itemLabelColumn: {
    flex: 6,
    flexDirection: 'column',
    marginTop: 2,
    marginLeft: 10,
    height: 75
  },
  itemNextColumn: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    height: 75,
    marginTop: 15

  },
  itemAvatarIcon: {
    color: 'purple',
    marginLeft: 20

  },
  itemColumn: {

    flexDirection: 'column'
  },
  video: {
    //alignSelf:'center',
    width: 300,
    height: 300,
    marginBottom: 0,
    padding: 0,
  },
  question: {
    margin: 15,
    padding: 30,
    fontWeight: 'bolder',
    color: 'brown',
    backgroundColor: 'lightskyblue',
  },
  options: {
    textAlign: 'center',
    //fontFamily: "Trebuchet MS", Arial, Helvetica, sanSerif,
    borderCollapse: 'collapse',
    border: 0, solid: '#ddd',
    width: 100,
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bolder',
    color: 'green',
    fontSize: 20
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'green',
    textTransform:'uppercase',
    fontSize:20,
    margin: 15,
    padding: 15,
    width:300,
    alignSelf:'center'
  },
  text1:{
    flexDirection:'row',
    backgroundColor: 'lightcoral',
    margin:15,
    padding:10,
    borderRadius: 20,
  }

})

export default Globalstyles