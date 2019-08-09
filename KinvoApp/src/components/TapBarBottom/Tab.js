import * as React from "react"
import { Animated, TouchableOpacity } from "react-native"

import iconAdd from '../../icons/add.png';
import walletIcon from '../../icons/wallet.png';
import resumeIcon from '../../icons/resume.png';
import searchIcon from '../../icons/search.png';
import premiumIcon from '../../icons/premium.png';
import accountIcon from '../../icons/account.png';

const Tab = ({ focusAnim, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "tomato"]
          })
        }}
      >
        {title === 'Add' ?
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
        }

      </Animated.View>
    </TouchableOpacity>
  )
}

export default Tab