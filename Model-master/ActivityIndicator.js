import React,{Component} from 'react'
import {ActivityIndicator,StyleSheet, View} from 'react-native'

export default class activityindicator extends Component {
  state = { animating: true }

 closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false }), 5000)

 componentDidMount = () => this.closeActivityIndicator()
 render() {
    const animating = this.state.animating
    return (
       <View style = {styles.container}>
          <ActivityIndicator
             animating = {animating}
             color = '#bc2b78'
             size = "large"
             style = {styles.activityIndicator}/>
       </View>
    )
 }
}

const styles = StyleSheet.create ({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
 },
 activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }
})
