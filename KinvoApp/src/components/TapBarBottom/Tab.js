import * as React from "react"
import { Animated, TouchableOpacity, Image } from "react-native"

import addIcon from '../../icons/add.png';
import walletIcon from '../../icons/wallet.png';
import resumeIcon from '../../icons/resume.png';
import searchIcon from '../../icons/search.png';
import premiumIcon from '../../icons/premium.png';
import accountIcon from '../../icons/account.png';

const icons = [
  resumeIcon, walletIcon, addIcon, 
  premiumIcon, accountIcon
];

const Tab = ({ focusAnim, title, onPress, index }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      flex: 1}}>
      <Animated.View
        style={{
          flex: 1,
          padding: 0,
          borderRadius: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "#f5f8fab5"]
          })
        }}
      >
        <Image source={icons[index]} style={{ height: 64, width: 64 }}/>
        {/* {title === 'Add' ?
          <Animated.Text
            style={{
              color: focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["#444", "#fff"]
              })
            }}
          ></Animated.Text> :
          <Animated.Text
            style={{
              color: focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["#444", "#fff"]
              })
            }}
          >{title}</Animated.Text>
        } */}

      </Animated.View>
    </TouchableOpacity>
  )
}

export default Tab